exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => 
    { if (stage === "build-html") 
        { actions.setWebpackConfig
            ({ module: { rules: [ { test: /node_modules\/paper/, use: loaders.null(), 
        }, 
    ], 
}, }) } }

