# FirstHandClothes
 This app will allow users to browse through a database of select clothes and buy them.

# Production setup
## Algolia
1. Make sure you can access the teams algolia account.
2. Make sure you have your access key in a .env file called ALGOLIA_KEY
    * It looks like 05cff92a82d1h912dh12d91dh2ccdf7f (This one is fake, get yours in your algolia dashboard under settings/Api keys)

## Netlify
1. Make sure to add your algolia key to netlify environment variables.

### Common errors  
* If in your logs you get a `failing to compile error`: Failed during stage 'building site': Build script returned non-zero exit code: 2.
    It usually means that there are some linting errors, look in your logs and you should see what's bothering Netlify


# Local setup
1. Set up your .env to include:
 * REACT_APP_ALGOLIA_KEY='05cff92a82d1h912dh12d91dh2ccdf7f' <- use your own key
2. run `npm start` 



# TODO 
## Contentful
1. As of now we are leveraging algolia for images, we want to set up contentful for more customization.

# FAQ?
## How do I add more clothes?
To add more clothes go to Algolia and find the clothes index. There you can click the `Add records` button