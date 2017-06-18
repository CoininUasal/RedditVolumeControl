using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VolumeApi.Models.Persistance
{
    interface IServerDataRepository
    {
        VolumeSettingModel Get(int id);
        IEnumerable<VolumeSettingModel> GetAll();
        VolumeSettingModel Add(VolumeSettingModel serverData);
        void Delete(int id);
        bool Update(VolumeSettingModel serverData);

    }
}
