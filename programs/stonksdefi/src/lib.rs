use anchor_lang::prelude::*;

declare_id!("EXvuR1R53eaHNaf6QL1c3yGPjAP8fyFpxU8zamMNASgG");

#[program]
pub mod stonksdefi {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        ctx.accounts.count_account.count = 0;
        msg!("Initialized");
        msg!("count:{}", ctx.accounts.count_account.count);
        Ok(())
    }

    pub fn increment(ctx:Context<Increment>)-> Result<()>{
        ctx.accounts.count_account.count+=1;
        msg!("Increment");
        msg!("Count:{}", ctx.accounts.count_account.count);
        Ok(())
    }

    pub fn set(ctx:Context<Set>, data:u64)-> Result<()>{
        ctx.accounts.count_account.count=data;
        msg!("Value set");
        msg!("Count:{}", ctx.accounts.count_account.count);
        Ok(())
    }

}





#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer=user, space=16+16)]
    pub count_account:Account<'info, CountAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>

}

#[derive(Accounts)]
pub struct Increment<'info>{
    #[account(mut)]
    pub count_account:Account<'info, CountAccount>
}

#[derive(Accounts)]
pub struct Set<'info>{
    #[account(mut)]
    pub count_account:Account<'info, CountAccount>
}


#[account]
pub struct CountAccount{
    count: u64
}

