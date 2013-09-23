using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IOS.FacilityBooking.Core.DomainObjects;
using System.Data.Entity.Migrations;

namespace IOS.FacilityBooking.DataAccess
{
    public class FacilityBookingDbContext : DbContext
    {
        public FacilityBookingDbContext()
            : base("Server=.\\Unicornlka;Database=FacilityBooking;Integrated Security=True;")
        {
           // Database.SetInitializer<FacilityBookingDbContext>(null);
            
        }
        public DbSet<Facility> FacilityList { get; set; }
       // public DbSet<Car> CarList { get; set; }
        public DbSet<User> UserList { get; set; }
        public DbSet<Booking> BookingList { get; set; }

        public DbSet<Room> Rooms { get; set; }
    }
}
