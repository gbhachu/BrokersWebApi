using Microsoft.EntityFrameworkCore.Migrations;

namespace BrokersWebApi.Migrations
{
    public partial class Client_Policy_Tables_updated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ClientId",
                table: "Policies",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Policies_ClientId",
                table: "Policies",
                column: "ClientId");

            migrationBuilder.AddForeignKey(
                name: "FK_Policies_Clients_ClientId",
                table: "Policies",
                column: "ClientId",
                principalTable: "Clients",
                principalColumn: "ClientId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Policies_Clients_ClientId",
                table: "Policies");

            migrationBuilder.DropIndex(
                name: "IX_Policies_ClientId",
                table: "Policies");

            migrationBuilder.DropColumn(
                name: "ClientId",
                table: "Policies");
        }
    }
}
