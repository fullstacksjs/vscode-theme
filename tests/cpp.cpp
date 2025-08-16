// syntax_highlight_test.cpp

#if __cplusplus < 202002L
#  error "Compile this file with C++20 or newer (-std=c++20)."
#endif

#include <array>

// ---------- Preprocessor & macros ----------
#define STR_IMPL(x) #x
#define STR(x) STR_IMPL(x)
#define CAT(a,b) a##b
#define UNUSED(x) ((void)(x))

#ifndef NDEBUG
#  define DBG(msg) (std::cerr << "[DBG] " << msg << "\n")
#else
#  define DBG(msg) ((void)0)
#endif

// line control (just for syntax)
#line 1000 "highlight_demo"

// ---------- Attributes ----------
[[maybe_unused]] static int attr_example = 0;
[[deprecated("use new_api()")]] void old_api() {}
[[nodiscard]] int must_use() { return 42; }
[[gnu::always_inline]] inline void gnu_attr_noop() {}

// ---------- Literals & UDL ----------
constexpr long double operator"" _rad(long double deg) { return deg * 3.141592653589793238L / 180.0L; }
constexpr unsigned operator"" _kb(unsigned long long n) { return static_cast<unsigned>(n * 1024ULL); }

// ---------- Concepts ----------
template <typename T>
concept Addable = requires(T a, T b) { { a + b } -> std::convertible_to<T>; };

template <typename T>
concept Iterable = requires(T t) {
    std::begin(t); std::end(t);
};

// ---------- Inline namespace & aliases ----------
namespace demo {
  inline namespace v1 {
      using byte = std::uint8_t;
      using i32  = std::int32_t;
      typedef double real; // typedef on purpose
  }
  namespace nested { }
}

// ---------- Enums ----------
enum Unscoped { Alpha = 1, Beta = 2 };
enum class Color : std::uint8_t { Red, Green, Blue };

// ---------- Forward decls ----------
struct Base;
template <typename T> struct Wrapper;

// ---------- Structs / Classes / Unions ----------
struct Trivial { int a{1}; int b{2}; };

union MyUnion {
    int i;
    float f;
    std::uint8_t bytes[4];
    constexpr MyUnion(int v = 0) : i(v) {}
};

struct [[nodiscard]] Resource {
    int* p{nullptr};
    explicit Resource(std::size_t n) : p(new int[n]()) {}
    ~Resource() { delete[] p; }
    Resource(const Resource&) = delete;
    Resource& operator=(const Resource&) = delete;
    Resource(Resource&& o) noexcept : p(std::exchange(o.p, nullptr)) {}
    Resource& operator=(Resource&& o) noexcept {
        if (this != &o) { delete[] p; p = std::exchange(o.p, nullptr); }
        return *this;
    }
};

// bit-fields, alignment, friend, operators
struct alignas(16) Vec2 {
    float x{0}, y{0};
    unsigned flags : 3 {0};
    friend std::ostream& operator<<(std::ostream& os, const Vec2& v) {
        return os << '(' << v.x << ',' << v.y << ") f=" << v.flags;
    }
    Vec2 operator+(const Vec2& rhs) const { return {x + rhs.x, y + rhs.y, static_cast<unsigned>((flags + rhs.flags) & 0x7)}; }
    bool operator==(const Vec2& rhs) const = default; // defaulted comparison
};

// Base/Derived with virtual/override/final/noexcept
struct Base {
    virtual ~Base() = default;
    virtual void speak() const noexcept { std::cout << "Base\n"; }
    virtual Base* clone() const & { return new Base(*this); }          // lvalue-qualified
    virtual Base* clone() && { return new Base(std::move(*this)); }    // rvalue-qualified
};

struct Derived final : Base {
    Vec2 v{};
    void speak() const noexcept override { std::cout << "Derived\n"; }
    Derived* clone() const & override { return new Derived(*this); }
    Derived* clone() && override { return new Derived(std::move(*this)); }
    // function-try-block
    Derived() try : v{1,2,5} { }
    catch(...) { std::cerr << "ctor error\n"; throw; }
};

// Template, partial specialization, static member, template-template param
template <typename T>
struct Wrapper {
    T value{};
    static inline int instances = 0;
    Wrapper() { ++instances; }
    ~Wrapper() { --instances; }
};

template <typename T, template<class...> class C>
struct Holder {
    C<T> c;
};

template <typename T> struct Wrapper<T*> { T* value{nullptr}; };

template <Addable T>
T add_all(T a, T b) { return a + b; }

// consteval / constexpr / constinit
consteval int always_at_compile_time(int x) { return x * 2; }
constexpr int sqr(int x) { return x * x; }
constinit int const_inited = 7;

// ---------- RTTI & casts ----------
struct Poly { virtual ~Poly() = default; };
struct PolyChild : Poly { int v = 9; };

// ---------- Coroutines (minimal task) ----------
struct Task {
    struct promise_type {
        Task get_return_object() { return {}; }
        std::suspend_never initial_suspend() noexcept { return {}; }
        std::suspend_never final_suspend() noexcept { return {}; }
        void return_void() noexcept {}
        void unhandled_exception() { std::terminate(); }
    };
};

Task tiny_coro() {
    co_return;
}

// ---------- Misc helpers ----------
template <typename T> requires Iterable<T>
std::size_t count_iterable(const T& t) {
    std::size_t n = 0;
    for (auto&& _ : t) { UNUSED(_); ++n; }
    return n;
}

template <typename... Ts>
auto make_tuple_and_fold(Ts&&... ts) {
    auto tup = std::make_tuple(std::forward<Ts>(ts)...);
    // fold expression just to touch syntax
    auto sum = (0 + ... + int(std::get<0>(std::forward_as_tuple(ts, 0)))); // silly, but legal-ish
    UNUSED(sum);
    return tup;
}

// ---------- Global inline var ----------
inline std::string inline_global = "hello";

// ---------- Goto label demo ----------
void goto_fun() {
    int n = 0;
start:
    if (n++ < 1) goto start;
}

// ---------- noexcept(expr) ----------
void might_throw(bool b) {
    if (b) throw std::runtime_error("boom");
}
void call_noexcept() noexcept(noexcept(might_throw(false))) {
    try { might_throw(false); } catch(...) {}
}

using namespace std::string_literals;
using std::string_view;

// ---------- Main ----------
int main() {
  DBG("starting");
  // literals & UDL
  auto angle = 90.0_rad;
  auto buf   = 64_kb;
  std::cout << "angle(rad)=" << angle << " buf=" << buf << "\n";

  // enums
  Unscoped u = Alpha;
  Color c = Color::Green;
  std::cout << "enum: " << int(u) << " color=" << int(c) << "\n";

  // alignment, sizeof/alignof
  std::cout << "alignof(Vec2)=" << alignof(Vec2) << " sizeof(Vec2)=" << sizeof(Vec2) << "\n";

  // new/delete, placement new
  void* raw = ::operator new(sizeof(Vec2), std::nothrow);
  if (raw) {
      Vec2* pv = ::new(raw) Vec2{3,4,7};
      std::cout << "placed: " << *pv << "\n";
      pv->~Vec2();
      ::operator delete(raw);
  }

  // union
  MyUnion uni{0x12345678};
  std::cout << "union i=" << std::hex << uni.i << std::dec << " first byte=" << int(uni.bytes[0]) << "\n";

  // optional/variant/any/tuple/array/vector/map
  std::optional<int> oi = 42;
  std::variant<int, std::string> var = "str"s;
  std::any a = 3.14;
  std::tuple<int, std::string, double> t{1, "two", 3.0};
  std::array<int, 4> arr{1,2,3,4};
  std::vector<int> vec{5,6,7};
  std::map<std::string, int> mp{{"x",1},{"y",2}};

  // structured bindings
  auto [ti, ts, td] = t; UNUSED(td);
  std::cout << "tuple parts: " << ti << " " << ts << "\n";

  // string & string_view
  std::string s = "C++"s + "20";
  string_view sv = s;
  std::cout << "sv=" << sv << "\n";

  // filesystem
  std::filesystem::path p = std::filesystem::current_path();
  std::cout << "cwd=" << p.string() << "\n";

  // chrono & thread & atomics & mutex
  std::atomic<int> counter{0};
}
