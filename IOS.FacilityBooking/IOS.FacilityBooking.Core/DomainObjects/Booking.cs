using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IOS.FacilityBooking.Core.DomainObjects
{
    public class Booking
    {
        public int Id { get; set; }
        public Facility BookedFacility { get; set; }
        public List<Facility> BookedSubFacilityList { get; set; }
    }
}
