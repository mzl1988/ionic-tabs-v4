#!/bin/bash

if [ $1 == "-ios" ]
then
    echo "going to build ios"
    ionic cordova build ios --prod --release

    echo "code-push - going to release ios"
    code-push release-cordova iris-android ios --deploymentName Staging --des "测试热更新"
elif [ $1 == "-android" ]
then
    echo "going to build android"
    ionic cordova build android --prod --release --buildConfig

    echo "code-push - going to release android"
    code-push release-cordova iris-android android --deploymentName Staging --des "测试热更新"
elif [ $1 == "-all" ]
then
    echo "going to build ios"
    ionic cordova build ios --prod --release

    echo "going to build android"
    ionic cordova build android --prod --release --buildConfig

    echo "code-push - going to release ios"
    code-push release-cordova iris-android ios --deploymentName Staging --des "测试热更新"

    echo "code-push - going to release android"
    code-push release-cordova iris-android android --deploymentName Staging --des "测试热更新"

fi 