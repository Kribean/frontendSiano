const API_URL = "https://siano-68ab8a611f1c.herokuapp.com";

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

export function getAllCustomers (thematics,token)
{
   return fetch(`${API_URL}/api/auth-consumer?listOfThematics=${thematics}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
        
      })
};

export function AddAndgetMyCustomers (idConsumer,token)
{
   return fetch(`${API_URL}/api/auth-company/update-consumer-and-allow-assess/${idConsumer}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
        
      })
};

export function getMyConsumers (token)
{
  
  return fetch(`${API_URL}/api/auth-company/get-my-clients`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
    
  })
}

export function addProduct (body,token)
{
  
  return fetch(`${API_URL}/api/product`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body),
    
  })
}

export function getMyProducts (token)
{
  
  return fetch(`${API_URL}/api/product/company`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
    
  })
};

export function deleteMyProducts (token,idProduct)
{
  
  return fetch(`${API_URL}/api/product/${idProduct}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
    
  })
}

export function createEvent (body,token)
{
  
  return fetch(`${API_URL}/api/event`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body),
    
  })
};

export function deleteEvent (idEvent,token)
{
  
  return fetch(`${API_URL}/api/event/${idEvent}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
    
  })
};

export function getAllEvents (idCompany)
{
  
  return fetch(`${API_URL}/api/event?idCompany=${idCompany}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    
  })
};

export function createJob (body,token)
{
  
  return fetch(`${API_URL}/api/job-offer`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body),
    
  })
};

export function getAllJobs (idCompany)
{
  
  return fetch(`${API_URL}/api/job-offer?idCompany=${idCompany}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    
  })
};

export function deleteJob (idJob,token)
{
  
  return fetch(`${API_URL}/api/job-offer/${idJob}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
    
  })
};