using IOS.FacilityBooking.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IOS.FacilityBooking.Web.Models
{
    public class CarViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<string> ImageList { get; set; }
        public List<Facility> SubFacilityList { get; set; }
        public bool Booked { get; set; }
        public DateTime BookFromDateTime { get; set; }
        public DateTime BookToDateTime { get; set; }
    }
}