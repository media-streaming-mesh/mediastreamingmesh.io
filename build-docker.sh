#!/bin/bash -e
# Syntax build-docker.sh [-i|--image imagename]

PROJECT=media-streaming-mesh
DOCKER_IMAGE=${PROJECT}:latest

while [[ $# -gt 0 ]]
do
    key="${1}"

    case ${key} in
    -i|--image)
        DOCKER_IMAGE="${2}"
        shift;shift
        ;;
    -h|--help)
        less README.md
        exit 0
        ;;
    -c|--code-coverage)
        CODE_COVERAGE=cc
        shift
        ;;
    -s|--static-analysis)
        STATIC_ANALYSIS=sa
        shift
        ;;
    *) # unknown
        echo Unknown Parameter $1
        exit 4
    esac
done


echo BUILDING DOCKER ${DOCKER_IMAGE}

docker build \
    -t ${DOCKER_IMAGE} \
    -f Dockerfile \
    .
