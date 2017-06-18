using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace VolumeApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "ServerDataByType",
                routeTemplate: "api/{controller}/type/{type}"
            );

            config.Routes.MapHttpRoute(
                name: "ServerDataByIP",
                routeTemplate: "api/{controller}/ip/{ip}"
            );
        }
    }
}
