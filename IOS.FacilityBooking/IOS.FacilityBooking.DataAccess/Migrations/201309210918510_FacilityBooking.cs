namespace IOS.FacilityBooking.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FacilityBooking : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Bookings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BookedFacility_FacilityId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Facilities", t => t.BookedFacility_FacilityId)
                .Index(t => t.BookedFacility_FacilityId);
            
            CreateTable(
                "dbo.Facilities",
                c => new
                    {
                        FacilityId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        Booked = c.Boolean(nullable: false),
                        BookFromDateTime = c.DateTime(nullable: false),
                        BookToDateTime = c.DateTime(nullable: false),
                        CarId = c.Int(),
                        Brand = c.String(),
                        Model = c.String(),
                        VehicleNumber = c.String(),
                        NoOfSeats = c.Int(),
                        RoomId = c.Int(),
                        Area = c.Decimal(precision: 18, scale: 2),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                        Facility_FacilityId = c.Int(),
                        Booking_Id = c.Int(),
                    })
                .PrimaryKey(t => t.FacilityId)
                .ForeignKey("dbo.Facilities", t => t.Facility_FacilityId)
                .ForeignKey("dbo.Bookings", t => t.Booking_Id)
                .Index(t => t.Facility_FacilityId)
                .Index(t => t.Booking_Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        UserName = c.String(),
                        Password = c.String(),
                        Role = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Facilities", "Booking_Id", "dbo.Bookings");
            DropForeignKey("dbo.Bookings", "BookedFacility_FacilityId", "dbo.Facilities");
            DropForeignKey("dbo.Facilities", "Facility_FacilityId", "dbo.Facilities");
            DropIndex("dbo.Facilities", new[] { "Booking_Id" });
            DropIndex("dbo.Bookings", new[] { "BookedFacility_FacilityId" });
            DropIndex("dbo.Facilities", new[] { "Facility_FacilityId" });
            DropTable("dbo.Users");
            DropTable("dbo.Facilities");
            DropTable("dbo.Bookings");
        }
    }
}
