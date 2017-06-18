using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VolumeApi.Models
{
    public class VolumeSettingModel
    {
        private int _id;
        private string _name;
        private string _value;

        public virtual int Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public virtual string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public virtual string Value
        {
            get { return _value; }
            set { _value = value; }
        }
    }
}