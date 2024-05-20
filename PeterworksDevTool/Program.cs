using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using PeterworksDevTool;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

// builder.Configuration.AddAzureAppConfiguration(options =>
// {
//     //options.Connect("Endpoint=https://peterworksdevtoolvalue.azconfig.io;Id=CAfQ;Secret=/p3hQJSJCvWQVvwZ+ezTO7TV6rTmj2/6SDmVK6Jyk0A=");
// });

await builder.Build().RunAsync();
