using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using milkShop.Api.Data;
using milkShop.Api.Models;

namespace milkShop.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MilkProductController : ControllerBase
    {
        private readonly MilkDbContext _context;

        public MilkProductController(MilkDbContext context)
        {
            _context = context;
        }

        // GET: api/MilkProduct
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MilkProduct>>> GetAllMilks()
        {
          if (_context.AllMilks == null)
          {
              return NotFound();
          }
            return await _context.AllMilks.ToListAsync();
        }

        // GET: api/MilkProduct/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MilkProduct>> GetMilkProduct(string id)
        {
          if (_context.AllMilks == null)
          {
              return NotFound();
          }
            var milkProduct = await _context.AllMilks.FindAsync(id);

            if (milkProduct == null)
            {
                return NotFound();
            }

            return milkProduct;
        }

        // PUT: api/MilkProduct/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMilkProduct(string id, MilkProduct milkProduct)
        {
            if (id != milkProduct.Id)
            {
                return BadRequest();
            }

            _context.Entry(milkProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MilkProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool MilkProductExists(string id)
        {
            return (_context.AllMilks?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
