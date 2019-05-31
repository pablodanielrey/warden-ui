#!/bin/bash
echo "corriendo en el puerto 10505"
docker run --rm -ti --name warden-ui -v $(pwd)/src:/src -p 10505:4200 desarrollo-ui
