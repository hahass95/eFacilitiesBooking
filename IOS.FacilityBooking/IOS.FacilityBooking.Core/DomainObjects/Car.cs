using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IOS.FacilityBooking.Core.DomainObjects
{
    public class Car :Facility
    {
        public int CarId { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string VehicleNumber { get; set; }
        public int NoOfSeats { get; set; }
    }
}
