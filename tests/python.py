#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
syntax_highlight_test.py
A maximal-ish Python syntax sampler for theme testing.
Covers: most keywords, pattern matching, comprehensions, decorators,
classes (incl. ABC, metaclass, descriptors, dataclasses), typing, async,
context managers, exception groups, f-strings, slicing/unpacking, etc.
"""

from __future__ import annotations

# Built-in & stdlib imports (various styles)
import math as _math, sys, pathlib
from dataclasses import dataclass, field
from enum import Enum, IntEnum, auto
from functools import wraps, cached_property
from contextlib import contextmanager, asynccontextmanager
from typing import (
    Any, Annotated, ClassVar, Final, Generic, Iterable, Iterator, Mapping,
    Protocol, Sequence, TypeAlias, TypeVar, Union, Optional,
    overload, runtime_checkable, TypedDict, NamedTuple, Literal, NewType
)
from typing_extensions import Self  # if available
import typing as t

__all__ = ["Point", "Color", "Example", "main"]

# Numeric/bytes/string literals (bin/hex/oct, underscores, bytes, raw, f-strings)
BIN: int = 0b1010_0110
HEX: int = 0xCA_FE_BA_BE
OCT: int = 0o7_123
BIG: int = 1_000_000
BYTES: bytes = b"\x00\xFF\n"
RAW: str = r"C:\path\to\file(mamad)[]\n"
UNICODE: str = "π ≈ 3.14159"
NAME: Final[str] = "syntax_highlight_test"
ELLIPSIS = ...  # the literal Ellipsis object

# Typing tools
T = TypeVar("T")
U = TypeVar("U", bound=Sequence[Any])
Number: TypeAlias = Union[int, float, complex]
UserId = NewType("UserId", int)

class Color(Enum):
    RED = auto()
    GREEN = auto()
    BLUE = auto()

class Flag(IntEnum):
    A = 1
    B = 2

class Coords(NamedTuple):
    x: float
    y: float

class UserDict(TypedDict, total=False):
    id: UserId
    name: str
    roles: list[str]

@runtime_checkable
class Stringy(Protocol):
    def __str__(self) -> str: ...

# Descriptor example
class Descriptor:
    def __set_name__(self, owner, name):
        self.private = f"_{name}"
    def __get__(self, obj, owner=None):
        if obj is None:
            return self
        return getattr(obj, self.private, None)
    def __set__(self, obj, value):
        setattr(obj, self.private, value)
    def __delete__(self, obj):
        delattr(obj, self.private)

# Metaclass example
class Meta(type):
    def __new__(mcls, name, bases, ns):
        ns["created_by_meta"] = True
        return super().__new__(mcls, name, bases, ns)

# Abstract base class
import abc
class AbstractThing(abc.ABC):
    @abc.ABCMeta.register
    class _Registered:  # register a dummy subclass
        pass

    @abc.abstractmethod
    def act(self) -> None: ...

# Dataclass with many bells/whistles
@dataclass(order=True, slots=True, frozen=False, kw_only=True)
class Point(Generic[T]):
    x: Annotated[T, "abscissa"] = field(default_factory=lambda: 0)  # type: ignore[return-value]
    y: T = field(default=0)  # type: ignore[assignment]
    label: Optional[str] = None
    meta: ClassVar[str] = "point"

    # Descriptor usage
    tag = Descriptor()

    def __post_init__(self):
        # assert, pass (no-op), and f-strings
        assert self.x is not None and self.y is not None, "Coordinates required"
        pass

    def __iter__(self) -> Iterator[T]:
        yield self.x
        yield self.y

    def __add__(self, other: "Point[T]") -> "Point[T]":
        # pattern matching inside method
        match (self.x, self.y, other.x, other.y):
            case (int() as ax, int() as ay, int() as bx, int() as by):
                return Point(x=ax + bx, y=ay + by, label=self.label or other.label)
            case _:
                raise TypeError("Only int points can be added for this demo")

    @property
    def magnitude(self) -> float:
        return (_math.hypot(float(self.x), float(self.y)))

    @cached_property
    def quadrant(self) -> int | None:
        x, y = int(self.x), int(self.y)
        if x == 0 or y == 0:
            return None
        return (1 if x > 0 and y > 0 else
                2 if x < 0 and y > 0 else
                3 if x < 0 and y < 0 else
                4)

    @classmethod
    def origin(cls) -> "Point[int]":
        return cls(x=0, y=0)

    @staticmethod
    def distance(a: "Point[Number]", b: "Point[Number]") -> float:
        return float(_math.hypot(float(a.x) - float(b.x), float(a.y) - float(b.y)))

# Simple class using metaclass, properties, and descriptors
class Example(AbstractThing, metaclass=Meta):
    value = Descriptor()

    def __init__(self, data: list[int] | None = None):
        self._name = "Example"
        self.data = data or []

    def act(self) -> None:
        print("Acting!")

    @property
    def name(self) -> str:
        return self._name

    @name.setter
    def name(self, v: str) -> None:
        if not v:
            raise ValueError("name cannot be empty")
        self._name = v

    @name.deleter
    def name(self) -> None:  # type: ignore[override]
        del self._name

# Decorators (function & decorator factory)
def deco(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

def deco_with_arg(prefix: str):
    def inner(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            print(prefix, "->", func.__name__)
            return func(*args, **kwargs)
        return wrapper
    return inner

@deco
@deco_with_arg("call")
def decorated(a: int, /, b: int = 2, *args: int, c: int = 3, **kw: Any) -> int:
    """Positional-only (/), keyword-only (*), defaults, *args/**kwargs."""
    total = a + b + c + sum(args) + sum(kw.values() if kw else [])
    return total

# Context managers: class-based, generator-based, async
class CM:
    def __enter__(self):
        print("enter")
        return self
    def __exit__(self, exc_type, exc, tb):
        print("exit")
        return False  # do not suppress

@contextmanager
def cm():
    try:
        yield {"ok": True}
    finally:
        pass

@asynccontextmanager
async def acm():
    try:
        yield "async-ok"
    finally:
        pass

# Generators, coroutines, async-for/with
def gen(n: int) -> Iterator[int]:
    for i in range(n):
        yield i

def gen2(n: int) -> Iterator[int]:
    yield from (i * i for i in range(n))

async def agen(n: int):
    for i in range(n):
        yield i  # async generator (PEP 525)

async def coro(x: int) -> int:
    return x + 1

# Overloads
@overload
def stringify(x: int) -> str: ...
@overload
def stringify(x: Stringy) -> str: ...

def stringify(x: Any) -> str:
    return str(x)

# Lambdas, comprehensions, walrus, unpacking, slicing, star targets
L = lambda x, y=2: x + y  # noqa: E731 (intentional)
nums = [n for n in range(10) if n % 2 == 0]
squares = {n: n * n for n in nums}
evens = {n for n in nums}
gexpr = (n for n in nums if (half := n // 2) >= 0)  # walrus operator

a, *mid, z = [1, 2, 3, 4, 5]
first, second = (0, 1)
head, *_, tail = [10, 20, 30, 40]
slice_demo = [0, 1, 2, 3, 4, 5][1:5:2]

# Globals / nonlocals
COUNTER = 0
def bump() -> int:
    global COUNTER
    COUNTER += 1
    return COUNTER

def outer() -> int:
    x = 0
    def inner():
        nonlocal x
        x += 1
        return x
    inner(); inner()
    return x

# Pattern matching sampler (PEP 634+)
def matcher(obj: Any) -> str:
    match obj:
        case 0 | 1 | 2:
            return "small int"
        case -1:
            return "minus one"
        case [x, y]:
            return f"pair: {x}, {y}"
        case {"x": x, "y": y} if isinstance(x, (int, float)) and isinstance(y, (int, float)):
            return f"mapping with coords {x},{y}"
        case Point(x=int() as px, y=int() as py):
            return f"point ints {px},{py}"
        case Color.RED:
            return "red!"
        case str() as s if "!" in s:
            return f"excited {s!r}"
        case _ as other:
            return f"other: {other!r}"

# Exceptions: try/except/else/finally, raise from, exception groups (3.11), except*
def might_fail(v: int) -> int:
    if v < 0:
        raise ValueError("negative!")
    if v == 0:
        raise RuntimeError("zero!")
    return v

def error_handling_demo() -> str:
    try:
        val = might_fail(0)
    except (ValueError, RuntimeError) as e:
        try:
            # Create an ExceptionGroup and handle with except*
            raise ExceptionGroup("grouped", [e, ValueError("also")])
        except* ValueError as eg:
            msgs = [str(ex) for ex in eg.exceptions]  # type: ignore[attr-defined]
        except* RuntimeError as eg:
            msgs = [f"RT: {ex}" for ex in eg.exceptions]  # type: ignore[attr-defined]
        else:
            msgs = ["no except* matched"]  # pragma: no cover
        finally:
            msgs.append("finally")
        # Chained raise
        raise RuntimeError("wrapped") from e
    else:
        return f"ok {val}"
    # unreachable

# Simple file I/O (with/as), del, is / is not, in / not in, and/or/not
def io_demo(tmp: pathlib.Path) -> str:
    text = "hello\nworld\n"
    with tmp.open("w", encoding="utf-8") as f:
        f.write(text)
    with open(tmp, "r", encoding="utf-8") as f:
        data = f.read()
    lines = data.splitlines()
    assert lines[0] is not None and "hello" in lines[0] and not ("bye" in lines[0])
    del lines[:1]
    return "\n".join(lines)

# Async usage demo
async def async_demo() -> int:
    async with acm() as token:
        assert token == "async-ok"
        total = 0
        async for i in agen(3):
            total += await coro(i)
        return total

# Small helper to show annotations & defaults
def func_spec(a: int, /, b: int = 2, *, c: int = 3) -> int:
    return a + b + c

# f-string features
def format_demo(x: float) -> str:
    return f"x={x:.3f} | bin={BIN:#b} | hex={HEX:#x} | name={NAME!r}"

# Sentry for main
def main(argv: list[str] | None = None) -> int:
    argv = argv or sys.argv[1:]
    p = Point[int](x=3, y=4, label="p")
    p.tag = "ptag"
    e = Example([1, 2, 3])
    e.value = 99

    with CM() as _cm, cm() as res:
        print("cm dict ok:", res.get("ok"))

    total = decorated(1, 2, 3, 4, c=5, extra=6)
    print("decorated:", total)

    print("props:", p.magnitude, p.quadrant)
    print("ops add:", (Point[int](x=1, y=2) + Point[int](x=3, y=4)))

    # Comprehensions & generator
    print("nums:", nums, "squares:", squares, "evens:", evens, "gen2:", list(gen2(5)))

    # Match
    for thing in (0, [1, 2], {"x": 3, "y": 4}, p, "wow!"):
        print("match->", matcher(thing))

    # Misc funcs
    bump(); bump()
    print("outer:", outer())
    print("format:", format_demo(3.14159))

    # Safe call to error demo (swallow final raise)
    try:
        error_handling_demo()
    except Exception as final:
        print("caught:", final)

    # Slicing & unpacking demos
    print("slice_demo:", slice_demo, "unpack:", a, mid, z, head, tail)
    print("stringify:", stringify(123), stringify(Point.origin()))

    # Show that protocols accept str()-able types
    class S:
        def __str__(self) -> str: return "ok"
    print("protocol:", stringify(S()))

    # Byte operations and boolean keywords
    print("bytes:", BYTES, bool(1 and not (0 or False)) or True)

    # Avoid executing async in top-level if imported
    if __name__ == "__main__":
        import asyncio
        print("async_demo:", asyncio.run(async_demo()))

    return 0

if __name__ == "__main__":
    raise SystemExit(main())
