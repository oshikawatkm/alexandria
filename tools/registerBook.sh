#!bin/bash

set -e
trap 'error status is ' error
. ./config.text

function usage {
  cat <<EOM 
  Usage $(basename "$0") [OPTION]...
    -t VALUE Title
    -h VALUE Hash
    -d VALUE Description
    -p VALUE Price
    -u VALUE USER_ID
EOM
  
  exit 2
}


TITLE="default"
HASH=""
DESCRIPTION="This is default discription"
PRICE="500"
USE_ID="1"

while getopts ":t:h:d:p:" optKey do
  case "$optKey" in
    t)
      TITLE=${OPTARG}
      ;;
    h)
      HASH=${OPTARG}
      ;;
    d)
      DESCRIPTION=${OPTARG}
      ;;
    p)
      PRICE=${OPTARG}
      ;;
    u)
      USER_ID=${OPTARG}
      ;;
  esac
done

# curl -X -H "Content-Type: application/json" -d '{"user_id":"'"$USER_ID"'",

echo "finish!"
exit 0