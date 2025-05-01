module.exports=function(api){
    api.cache(true);
    return{
        presents: ['babel-present-expo'],
        plugins:[
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path:'.env',
                },
            ],
        ],
    };
}