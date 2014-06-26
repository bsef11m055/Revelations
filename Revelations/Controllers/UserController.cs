using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Revelations.Models;

namespace Revelations.Controllers
{
    public class UserController : Controller
    {
        //
        // GET: /User/
        IUserRepository UserRepo;
        public UserController(IUserRepository UserRepo)
        {
            this.UserRepo = UserRepo;
        }
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Create(User u)
        {
            if (ModelState.IsValid)
            {
                UserRepo.SaveUser(u);
                Session["user"] = u;
            }
            return RedirectToAction( "Index", "Home" );
        }
        public ActionResult Logout()
        {
            Session["user"] = null;
            return RedirectToAction( "Index", "Home" );
        }
        public ActionResult Login(User u)
        {
            Session["user"] = UserRepo.getUser(u.Username, u.Password);
            return RedirectToAction("Index", "Home");
        }
    }
}
