using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IOS.FacilityBooking.Web.Controllers
{
    public class UserController : Controller
    {
        //
        // GET: /User/

		public ActionResult UserHome(string returnUrl)
        {
			ViewBag.ReturnUrl = returnUrl;
			return View();
        }

    }
}
