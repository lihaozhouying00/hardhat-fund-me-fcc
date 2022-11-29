const { ConstructorFragment } = require("@ethersproject/abi")
const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("withdrawing from contract...")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log("Withdraw!")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
