using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NHibernate.Linq;
using VolumeApi.Helper;

namespace VolumeApi.Models.Persistance
{
    public class ServerDataRepository : IServerDataRepository
    {
        public ServerDataRepository()
        {

        }

        public VolumeSettingModel Get(int id)
        {
            using (var session = NHibernateHelper.OpenSession())
                return session.Get<VolumeSettingModel>(id);
        }

        public IEnumerable<VolumeSettingModel> GetAll()
        {
            using (var session = NHibernateHelper.OpenSession())
                return session.Query<VolumeSettingModel>().ToList();
        }

        public VolumeSettingModel Add(VolumeSettingModel serverData)
        {
            using (var session = NHibernateHelper.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    session.Save(serverData);
                    transaction.Commit();
                }
                return serverData;
            }
        }

        public void Delete(int id)
        {
            var serverData = Get(id);

            using (var session = NHibernateHelper.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    session.Delete(serverData);
                    transaction.Commit();
                }
            }

        }

        public bool Update(VolumeSettingModel serverData)
        {
            using (var session = NHibernateHelper.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    session.SaveOrUpdate(serverData);
                    try
                    {
                        transaction.Commit();
                    }
                    catch (Exception)
                    {

                        throw;
                    }

                }
                return true;
            }
        }
    }
}