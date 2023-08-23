const API_URL = "http://localhost:8000";

export function getTenCompanies ()
{
    return fetch(`${API_URL}/api/auth-company/random-companies`, {
        method: "GET"
      })
};

export function getTenUpgradeCompanies ()
{
   return fetch(`${API_URL}/api/auth-company/best-one`, {
        method: "GET"
      })
};

export function getNotification ()
{
   return fetch(`${API_URL}/api/notification/1`, {
        method: "GET"
      })
};

export function getFigure ()
{
   return fetch(`${API_URL}/api/auth-company/figure`, {
        method: "GET"
      })
};

export function createAccount (body)
{
   return fetch(`${API_URL}/api/auth-company/signup-company`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
};

export function logToAccount (body)
{
   return fetch(`${API_URL}/api/auth-company/login-company`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
};

export function getProfile (idCompany,token)
{
   return fetch(`${API_URL}/api/auth-company/company/${idCompany}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      })
};

export function modifyProfile (body,token)
{
   return fetch(`${API_URL}/api/auth-company/update-company`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body),
        
      })
};


export function deleteProfile (token)
{
   return fetch(`${API_URL}/api/auth-company/delete-company`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
        
      })
};