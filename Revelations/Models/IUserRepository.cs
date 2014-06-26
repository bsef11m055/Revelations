using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Revelations.Models
{
    public interface IUserRepository
    {
        void SaveUser(User u);
        User getUser(string username , string password);
    }
}
