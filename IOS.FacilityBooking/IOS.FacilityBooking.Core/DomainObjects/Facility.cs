using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IOS.FacilityBooking.Core.DomainObjects
{
    public abstract class Facility
    {
        public  int FacilityId { get; set; }
        public  string Name { get; set; }
        public  string Description { get; set; }
        private List<string> _imageList = new List<string>();
        public List<string> ImageList
        {
            get { return _imageList; }
            set { _imageList = value; }
        }
        private List<Facility> _subFacilityList = new List<Facility>();
        public List<Facility> SubFacilityList
        {
            get { return _subFacilityList; }
            set { _subFacilityList = value; }
        }
        public  bool Booked { get; set; }
        public  DateTime BookFromDateTime { get; set; }
        public  DateTime BookToDateTime { get; set; }
    }
}
