import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Stonksdefi } from "../target/types/stonksdefi";

describe("stonksdefi", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Stonksdefi as Program<Stonksdefi>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
