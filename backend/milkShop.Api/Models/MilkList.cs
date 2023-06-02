
namespace milkShop.Api.Models;
public class MilkList
{
    public required int count { get; set; }
    public required List<MilkProduct> results { get; set; }
}
