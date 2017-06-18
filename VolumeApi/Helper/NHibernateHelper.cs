using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using NHibernate.Tool.hbm2ddl;
using VolumeApi.Models;

namespace VolumeApi.Helper
{
    public class NHibernateHelper
    {
        public static ISession OpenSession()
        {
            return SessionFactory.OpenSession();

        }


        private static ISessionFactory _sessionFactory;
        const string ConnectionString = @"data source=Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Brian\Documents\Visual Studio 2017\Projects\RedditVolumeControl\VolumeApi\App_Data\VolumeDB.mdf;Integrated Security=True";
        private static ISessionFactory SessionFactory
        {
            get
            {
                if (_sessionFactory == null)
                    CreateSessionFactory();

                return _sessionFactory;
            }
        }

        private static void CreateSessionFactory()
        {
            _sessionFactory = Fluently.Configure()
                .Database(MsSqlConfiguration.MsSql2008.ConnectionString(ConnectionString).ShowSql)
                .Mappings(m => m.FluentMappings.AddFromAssemblyOf<VolumeSettingModel>())
                .ExposeConfiguration(cfg => new SchemaExport(cfg).Create(false, false))
                .BuildSessionFactory();
        }
    }
}