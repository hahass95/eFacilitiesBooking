using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using IOS.FacilityBooking.Core.DomainObjects;
using IOS.FacilityBooking.DataAccess;

namespace IOS.FacilityBooking.Web.Controllers
{
    public class ManageRoomsController : Controller
    {
        private FacilityBookingDbContext db = new FacilityBookingDbContext();

        //
        // GET: /ManageRooms/

        public ActionResult Index()
        {
            List<Room> roomList = new List<Room>();
            foreach (Facility f in db.FacilityList)
            {
                roomList.Add((Room)f);
            }
            return View(roomList);
        }

        //
        // GET: /ManageRooms/Details/5

        public ActionResult Details(int id = 0)
        {
            Room room = (Room)db.FacilityList.Find(id);
            if (room == null)
            {
                return HttpNotFound();
            }
            return View(room);
        }

        //
        // GET: /ManageRooms/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /ManageRooms/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Room room)
        {
            if (ModelState.IsValid)
            {
                db.FacilityList.Add(room);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(room);
        }

        //
        // GET: /ManageRooms/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Room room = (Room)db.FacilityList.Find(id);
            if (room == null)
            {
                return HttpNotFound();
            }
            return View(room);
        }

        //
        // POST: /ManageRooms/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Room room)
        {
            if (ModelState.IsValid)
            {
                db.Entry(room).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(room);
        }

        //
        // GET: /ManageRooms/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Room room = (Room)db.FacilityList.Find(id);
            if (room == null)
            {
                return HttpNotFound();
            }
            return View(room);
        }

        //
        // POST: /ManageRooms/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Room room = (Room)db.FacilityList.Find(id);
            db.FacilityList.Remove(room);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}