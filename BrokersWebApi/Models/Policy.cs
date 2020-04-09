using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BrokersWebApi.Models
{
    public class Policy
    {

        [Key]
        public int PolicyId { get; set; }

        [Required]
        public string CustomerName { get; set; }

        public string CustomerAddress { get; set; }

        public string Premium { get; set; }

        public string PolicyType { get; set; }

        public string InsurerName { get; set; }
    }
}
