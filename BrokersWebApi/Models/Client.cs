﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BrokersWebApi.Models
{
    public class Client
    {
        [Key]
        public int ClientId { get; set; }

        [Required]
        public string ClientName { get; set; }
    }
}
