#!/usr/bin/env bash

set -e -u -o pipefail

BAT=${1:-BAT1}
DIR="/sys/class/power_supply/$BAT"

if [ ! -d "$DIR" ]; then
  echo "Battery directory not found: $DIR"
  exit 1
fi

########################################################
###################   FUNCTIONS   ######################
########################################################
function get_charge() {
  local capacity=`head -n 1 "$DIR/charge_full"`
}

switch() {
  case $1 in
    charge)
      echo "Charge: $2"
      ;;
    *)
      echo "Unknown command: $1" || exit 1
      ;;
  esac
}

CAPACITY=$(head -n 1 "$DIR/charge_full")
DESIGN=$(head -n 1 "$DIR/charge_full_design")
NOW=$(head -n 1 "$DIR/charge_now")
STATUS=$(cat /sys/class/power_supply/BAT1/status)

CHARGE=$(bc <<<"scale=2; $NOW / $CAPACITY * 100")
HEALTH=$(bc <<<"scale=2; $CAPACITY / $DESIGN * 100")

tee <<EOF
Charge: $CHARGE
Health: $HEALTH
$STATUS
EOF

echo "Charge: $CHARGE"
echo "Health: $HEALTH"
echo "$STATUS"

array=(
  gcc
  g++
)

for pkg in "${array[@]}"; do
  pkg_name=$(echo "$pkg" | awk '{print $1}')
  progress "Installing $pkg_name"
  paru -Sq "$pkg" --noconfirm >/dev/null
done
