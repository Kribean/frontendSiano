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