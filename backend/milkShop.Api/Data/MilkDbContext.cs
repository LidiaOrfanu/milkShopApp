using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using milkShop.Api.Models;
using Newtonsoft.Json;

namespace milkShop.Api.Data;
public class MilkDbContext : DbContext
{
    public MilkDbContext(DbContextOptions<MilkDbContext> options)
       : base(options)
    {
    }

    public DbSet<MilkProduct>? AllMilks { get; set; } = default;
}
