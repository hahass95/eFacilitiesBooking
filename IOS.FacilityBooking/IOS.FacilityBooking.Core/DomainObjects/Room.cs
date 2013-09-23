using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IOS.FacilityBooking.Core.DomainObjects
{
    public class Room : Facility
    {
        public int RoomId { get; set; }
        public decimal Area { get; set; }
      
    }
}
