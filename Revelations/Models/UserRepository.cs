using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Revelations.Models
{
    public class UserRepository : IUserRepository
    {
        public void SaveUser(User newUser)
        {
            using (BlogDBEntities db = new BlogDBEntities())
            {
                db.Users.Add(newUser);
                db.SaveChanges();
            }
        }
        public User getUser(string username , string password)
        {
            using (BlogDBEntities db = new BlogDBEntities())
            {
                return db.Users.Where(i => i.Username == username && i.Password == password).ToList().ElementAt(0);
            }
        }
    }
}