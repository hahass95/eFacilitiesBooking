using IOS.FacilityBooking.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IOS.FacilityBooking.Web.Models
{
    public class BookingViewModel
    {
        public int Id { get; set; }
        public Facility BookedFacility { get; set; }
        public List<Facility> BookedSubFacilityList { get; set; }
    }
}