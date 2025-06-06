using Microsoft.EntityFrameworkCore;
using TaskManagementApi.Data;
using TaskManagementApi.Repositories;
using TaskManagementApi.Entities;

var builder = WebApplication.CreateBuilder(args);

// Student ID: 00012345
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("TaskDb"));

builder.Services.AddScoped<IRepository<User>, GenericRepository<User>>();
builder.Services.AddScoped<IRepository<Task>, TaskRepository>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();
