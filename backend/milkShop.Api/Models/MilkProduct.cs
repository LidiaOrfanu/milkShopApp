using System.ComponentModel.DataAnnotations;

namespace milkShop.Api.Models;

public class MilkProduct
{
    [Key]
    public required string Id { get; set; }
    public required string Name { get; set; }
    public required string Type { get; set; }
    public int Storage { get; set; }
}
