using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using milkShop.Api.Models;
using Newtonsoft.Json;

namespace milkShop.Api.Data
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MilkDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<MilkDbContext>>()))
            {
                var filePath = "./Data/milk.json";
                var fileContent = File.ReadAllText(filePath);
                var dbData = JsonConvert.DeserializeObject<MilkList>(fileContent);

                if (context.AllMilks!.Any()) { return; }
                foreach (var milk in dbData!.results)
                {
                    var newProd = new MilkProduct
                    {
                        Name = milk.Name!,
                        Type = milk.Type!,
                        Storage = milk.Storage!,
                        Id = milk.Id!
                    };
                    context.AllMilks!.Add(newProd);
                    context.SaveChanges();
                }   
            }
        }
    }
}