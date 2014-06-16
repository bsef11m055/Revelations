using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Revelations.Models;

namespace Revelations.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult CheckUsername()
        {
            BlogDBEntities db = new BlogDBEntities();

            return this.Json(db.Users.ToList().Any(i => i.Username == Request["name"]),
                JsonRequestBehavior.AllowGet);
        }
    }
}
