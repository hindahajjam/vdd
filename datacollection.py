""" 
This function is one of many and is used to get Invoices from Zoho API 
"""

def getModuleAPIMethodTest(params={}):
    with app.app_context():
        if cache.get('zoho_access') is None:
            try:
                refreshAccessTokenZoho(ZOHO_CODE)
            except Exception as error:
                app.logger.error(error, error.__traceback__)

        session = requestsZohoOauthSession()

        response = getWithZohoTokenRetryZohoCRMConfig(
            'https://books.zoho.com/api/v3/invoices',
            params=params)

        return response
     
""" 
This function is used to access EwattchCloud API organisations
"""    
      
@app.route('/organisations')
def get_access_token_organisations():

    headers = {
        "Content-Type": "application/json",
        "APIKEY": "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "USERID": "xxxxxxxx-xxxxx-xxxx-xxxx-xxxxxxx"

    }
    
    base_uri = 'https://ewattch.cloud/api/V2/organisation'
    response = requests.get(base_uri, headers=headers)
    print(response.json())

    if response.status_code < 300:
        return response.json()
    else:
        return None
