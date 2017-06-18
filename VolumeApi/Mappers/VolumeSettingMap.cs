using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FluentNHibernate.Mapping;
using VolumeApi.Models;

namespace VolumeApi.Mappers
{
    public class VolumeSettingMap : ClassMap<VolumeSettingModel>
    {
        public VolumeSettingMap()
        {
            Table("TblVolume");

            Id(x => x.Id, "Id").GeneratedBy.Identity().UnsavedValue(0);
            Map(x => x.Name);
            Map(x => x.Value);

        }
    }
}