## --------------------------------------------------------
. "devops-infra/config.sh"
## --------------------------------------------------------
NAME_IMG_DOCKER=melononline-api
ENVIRONMENT_DOCKER=test
## --------------------------------------------------------
NAME_IMG_DOCKER=$NAME_IMG_DOCKER
VERSION_DOCKER=$(curl --request GET $(echo $BASE_URL_AGENT)/version/$(echo $ENVIRONMENT_DOCKER)/$(echo $NAME_IMG_DOCKER))
## --------------------------------------------------------
APP_SOFTWARE_VERSION=$NAME_IMG_DOCKER-version-$VERSION_DOCKER
APP_DATE_BUILD=$(TZ=America/Santiago date)
## --------------------------------------------------------
echo "------------------------------------"
echo "------------------------------------"
echo "------------------------------------"
echo "docker version    : $VERSION_DOCKER"
echo "software version  : $APP_SOFTWARE_VERSION" > app-version.txt
echo "date build        : $APP_DATE_BUILD" > app-date-build.txt
echo "software version  : $APP_SOFTWARE_VERSION"
echo "date build        : $APP_DATE_BUILD"
echo "------------------------------------"
echo "------------------------------------"
echo "------------------------------------"
## --------------------------------------------------------
docker build -f Dockerfile -t $NAME_ORGANIZATION_DOCKER/$NAME_IMG_DOCKER-$ENVIRONMENT_DOCKER:version-$VERSION_DOCKER .
#docker push $NAME_ORGANIZATION_DOCKER/$NAME_IMG_DOCKER-$ENVIRONMENT_DOCKER:version-$VERSION_DOCKER
docker tag $NAME_ORGANIZATION_DOCKER/$NAME_IMG_DOCKER-$ENVIRONMENT_DOCKER:version-$VERSION_DOCKER $NAME_ORGANIZATION_DOCKER/$NAME_IMG_DOCKER-$ENVIRONMENT_DOCKER:version-$VERSION_DOCKER
docker push registry.ldwsstudios.com/$NAME_ORGANIZATION_DOCKER/$NAME_IMG_DOCKER-$ENVIRONMENT_DOCKER:version-$VERSION_DOCKER
## --------------------------------------------------------

