// // const axios = require('axios');
// // const Opossum = require('opossum');
// const consul = require('consul');
// const consulConfig = require('../config/consul');

// const consulClient = new consul(consulConfig); // Initialize Consul client

// // const circuitBreaker = new Opossum({
// //   timeout: 5000, // Adjust timeout value
// //   errorThreshold: 5, // Number of errors before tripping
// //   resetTimeout: 10000, // Time to wait before reset (in milliseconds)
// // });

// // async function callService(serviceName, path, method, body, ...args) {
// //   try {
//  const serviceBaseUrls = { // Replace with actual base URLs
//      'intercom': process.env.INTERCOM_BASE_URL,
//        'product': process.env.PRODUCT_BASE_URL,
//        // Add more services and their base URLs here
//      };

//     const baseUrl = serviceBaseUrls[serviceName] || 'http://localhost:8080/api/users'; // Use default if not found

//    if (!baseUrl) {
//        throw new Error(`Base URL not found for service: ${serviceName}`);
//     }
  
//     const serviceInfo = await consulClient.health.service({ service: serviceName });
//         if (!serviceInfo || serviceInfo.length === 0) {
//          throw new Error(`Service not found in Consul: ${serviceName}`);
//        }

   //const url = `${baseUrl}/${path}`;

// //     // Execute request with circuit breaker
// //     console.log("method, url,body,args", url,method,body,args);
// //     const response = await circuitBreaker.fire(() => axios[method](url, body, ...args));
// //     console.log("----response", response);

// //     return response.data;
// //   } catch (error) {
// //     // Handle error
// //     throw new Error(`Service call failed: ${error.message}`);
// //   }
// // }

// // module.exports = callService;


// const axios = require('axios');
// const Opossum = require('opossum');
// const consul = require('consul');
// const consulConfig = require('../config/consul'); // Replace with your Consul config path

// const consulClient = new consul(consulConfig);

// // Default circuit breaker configuration
// // const DEFAULT_CIRCUIT_BREAKER_CONFIG = {
// //   threshold: 0.5, // Failure rate threshold (e.g., 50% failures)
// //   cooldownTime: 5000, // Cooldown time in milliseconds (5 seconds)
// //   resetTime: 10000, // Time to reset after cooldown (optional)
// // };

// // function createAxiosClient(config = {}) {
// //   return axios.create(config); // No retry configuration
// // }

// // // async function getServiceUrl(serviceName) {
// // //   try {
// // //     const serviceInfo = await consulClient.health.service({ service: serviceName });
// // //     if (!serviceInfo || serviceInfo.length === 0) {
// // //       throw new Error(`Service not found in Consul: ${serviceName}`);
// // //     }

// // //     // Choose a healthy service instance (logic can be customized)
// // //     const serviceInstance = serviceInfo[0];
// // //     return `http://${serviceInstance.ServiceAddress}:${serviceInstance.ServicePort}`;
// // //   } catch (error) {
// // //     throw error; // Re-throw for further error handling
// // //   }
// // // }

// // // async function callService(serviceName, path, method, body, ...args) {
// // //   const circuitBreaker = new Opossum(DEFAULT_CIRCUIT_BREAKER_CONFIG);

// // //   try {
// // //     const hit = await circuitBreaker.fire(async () => {
// // //       //const url = await getServiceUrl(serviceName); // Retrieve service URL from Consul
// // //       const url = 'http://localhost:8080/api/users';
// // //       //const client = createAxiosClient(); // No retry configuration

// // //       try {
// // //         const response = await  createAxiosClient({
// // //           method,
// // //           url: `${url}/${path}`,
// // //           data: body, // Assuming body is for POST/PUT requests
// // //           ...args, // Additional request options
// // //         });
// // //         console.log("response.data", response);
// // //         return response;
// // //       } catch (error) {
// // //         console.log("----", error);
// // //         throw error; // Re-throw for further error handling
// // //       }
// // //     });
// // //     console.log("hit--1", hit);
// // //     return hit;
// // //   } catch (error) {
// // //     // Handle error from circuit breaker
// // //     console.error('Circuit breaker error:', error);
// // //     throw error;
// // //   }
// // //}
// // async function fireCircuitBreaker() {
// //   console.log("-----883");
// //   const url = 'http://localhost:8080/api/users';
 

// //   try {
// //     console.log("09383");
// //     const response = await axios({
// //       method,
// //       url: `${url}/${path}`,
// //       data: body,
// //       ...args,
// //     });
// //     console.log("response.data", response);
// //     return response;
// //   } catch (error) {
// //     console.log("----", error);
// //     throw error;
// //   }
// // }


// // async function callService(serviceName, path, method, body, ...args) {
// //   const circuitBreaker = new Opossum(DEFAULT_CIRCUIT_BREAKER_CONFIG);

// //   try {
// //     const hit = await circuitBreaker.fire(fireCircuitBreaker);
// //     console.log("hit--1", hit);
// //     return hit;
// //   } catch (error) {
// //     console.error('Circuit breaker error:', error);
// //     throw error;
// //   }
// // }

// const DEFAULT_CIRCUIT_BREAKER_CONFIG = {
//   threshold: 0.5, // Failure rate threshold (e.g., 50% failures)
//   cooldownTime: 5000, // Cooldown time in milliseconds (5 seconds)
//   resetTime: 10000, // Time to reset after cooldown (optional)
// };

// function createAxiosClient(config = {}) {
//   return axios.create(config);
// }

// // async function getServiceUrl(serviceName) {
// //   // Replace with your logic to retrieve service URL from Consul or other source
// //   // This example uses a placeholder URL for demonstration
// //   return `http://localhost:8080/api/services/${serviceName}`;
// // }

// async function fireCircuitBreaker(serviceName, path, method, body, ...args) {
//   //const url = await getServiceUrl(serviceName);
//   const url = 'http://localhost:8080/api/users';

//   try {
//     console.log("---i");
//     const response = await createAxiosClient()({
//       method,
//       url: `${url}/${path}`,
//       data: body, // Assuming body is for POST/PUT requests
//       ...args, // Additional request options
//     });
//     console.log("response.data", response.data);
//     return response;
//   } catch (error) {
//     console.error('API call error:', error);
//     throw error; // Re-throw for further error handling
//   }
// }

// async function callService(serviceName, path, method, body, ...args) {
//   const circuitBreaker = new Opossum(DEFAULT_CIRCUIT_BREAKER_CONFIG);

//   try {
//     const hit = await circuitBreaker.fire(fireCircuitBreaker.bind(null, serviceName, path, method, body, ...args)); // Bind arguments
//     console.log("hit--1", hit);
//     return hit;
//   } catch (error) {
//     console.error('Circuit breaker error:', error);
//     throw error;
//   }
// }


// module.exports = { callService, createAxiosClient };


//-----------------
const consul = require('consul'); // Assuming correct library
const consulConfig = require('../config/consul');

// Check library documentation for proper configuration passing
const consulClient = new consul(consulConfig);

const Opossum = require('opossum');
const axios = require('axios');

// Configure circuit breaker options (adjust as needed)
const options = {
  timeout: 5000, // Milliseconds before considering a request timed out
  resetTimeout: 10000, // Milliseconds to wait before transitioning from open to half-open state
  errorThreshold: 5, // Number of failures before tripping the circuit breaker
  successThreshold: 3, // Number of successes required to transition from half-open to closed state
};

// Create the circuit breaker instance
const breaker = new Opossum(async (url, body,method) => {
  try {
    const response = await axios[method](url, body);
    console.log("----checking", response);
    return response.data;
  } catch (error) {
    throw error; // Re-throw the error for circuit breaker handling
  }
}, options);


async function callService(serviceName,path,method,body) {
  try {
    const serviceBaseUrls = { // Replace with actual base URLs
        'intercom': process.env.INTERCOM_BASE_URL,
        'product': process.env.PRODUCT_BASE_URL,
        // Add more services and their base URLs here
      };
 
     const baseurl = serviceBaseUrls[serviceName] // Use default if not found
 
    if (!baseurl) {
        throw new Error(`Base URL not found for service: ${serviceName}`);
     }
   
     const serviceInfo = await consulClient.health.service({ service: serviceName });
    //  if (!serviceInfo || serviceInfo.length === 0) {
    //       throw new Error(`Service not found in Consul: ${serviceName}`);
    //     }
    console.log("consul health", serviceInfo);
      
    const healthyInstance = serviceInfo[0];
 //   const baseurl = 'http://localhost:8080/api/users';
    const url =  `${baseurl}/${path}`;
    return await breaker.fire(url, body,method);
  } catch (error) {
    if (error.isConsulError) { // Handle Consul specific errors (if applicable)
      console.error('Consul error:', error.message);
    }
    else{
    console.log("error in circuit breaks");
    throw error;
    } 
  }
}

module.exports = callService;

