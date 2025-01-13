﻿using AskExperts.Models;
using Microsoft.EntityFrameworkCore;

namespace AskExperts.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<MenuItems> MenuItems { get; set; }
        public DbSet<Services> Services { get; set; }
        public DbSet<ServicesData> ServicesData { get; set; }

    }
}