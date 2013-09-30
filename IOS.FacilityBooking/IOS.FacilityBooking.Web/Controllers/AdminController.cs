using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IOS.FacilityBooking.Web.Controllers
{
    public class AdminController : Controller
    {
        //
        // GET: /Admin/

		public ActionResult Home(string returnUrl)
        {
			ViewBag.ReturnUrl = returnUrl;
			return View();
        }

    }
}
