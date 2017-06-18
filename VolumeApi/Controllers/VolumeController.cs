using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VolumeApi.Models;
using VolumeApi.Models.Persistance;

namespace VolumeApi.Controllers
{
    public class VolumeController : ApiController
    {
        static readonly IServerDataRepository ServerDataRepository = new ServerDataRepository();

        public IEnumerable<VolumeSettingModel> GetServerData()
        {
            return ServerDataRepository.GetAll();
        }

        public VolumeSettingModel GetServerDataById(int id)
        {
            var serverData = ServerDataRepository.Get(id);

            if (serverData == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            return serverData;
        }

        public IEnumerable<VolumeSettingModel> GetServerDataByType(int type)
        {
            return ServerDataRepository.GetAll().Where(d => d.Id == type);
        }

        public IEnumerable<VolumeSettingModel> GetServerDataByIP(string ip)
        {
            return ServerDataRepository.GetAll().Where(d => d.Name.ToLower() == ip.ToLower());
        }

        public HttpResponseMessage PostServerData(VolumeSettingModel serverData)
        {
            serverData = ServerDataRepository.Add(serverData);

            var response = Request.CreateResponse(HttpStatusCode.Created, serverData);

            var uri = Url.Link("DefaultApi", new { id = serverData.Id });
            response.Headers.Location = new Uri(uri);

            return response;

        }

        public void PutServerData(int id, VolumeSettingModel serverData)
        {
            serverData.Id = id;

            if (!ServerDataRepository.Update(serverData))
                throw new HttpResponseException(HttpStatusCode.NotFound);
        }

        public void DeleteServerData(int id)
        {
            var serverData = ServerDataRepository.Get(id);

            if (serverData == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            ServerDataRepository.Delete(id);
        }
    }
}
