/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function stablecoinprotocol_min_box_value(a: number, b: number): void;
export function stablecoinprotocol_reservecoin_default_price(a: number, b: number): void;
export function stablecoinprotocol_min_reserve_ratio(a: number, b: number): void;
export function stablecoinprotocol_max_reserve_ratio(a: number, b: number): void;
export function stablecoinprotocol_stablecoin_token_id(a: number, b: number): void;
export function stablecoinprotocol_reservecoin_token_id(a: number, b: number): void;
export function stablecoinprotocol_bank_nft_id(a: number, b: number): void;
export function stablecoinprotocol_w_assembler_mint_reservecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number): void;
export function stablecoinprotocol_w_assembler_mint_stablecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number): void;
export function stablecoinprotocol_w_assembler_redeem_reservecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number): void;
export function stablecoinprotocol_w_assembler_redeem_stablecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number): void;
export function stablecoinprotocol_w_action_mint_reservecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number): number;
export function stablecoinprotocol_w_action_mint_stablecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number): number;
export function stablecoinprotocol_w_action_redeem_reservecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number): number;
export function stablecoinprotocol_w_action_redeem_stablecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number): number;
export function stablecoinprotocol_new(): number;
export function __wbg_stablecoinprotocol_free(a: number): void;
export function __wbg_bankbox_free(a: number): void;
export function bankbox_w_new(a: number): number;
export function bankbox_w_box_spec(a: number): number;
export function bankbox_w_process_explorer_response(a: number, b: number, c: number): void;
export function bankbox_w_explorer_endpoint(a: number, b: number, c: number): void;
export function bankbox_current_reserve_ratio(a: number, b: number, c: number): void;
export function bankbox_base_reserves(a: number, b: number): void;
export function bankbox_liabilities(a: number, b: number, c: number): void;
export function bankbox_equity(a: number, b: number, c: number): void;
export function bankbox_num_circulating_stablecoins(a: number, b: number): void;
export function bankbox_num_circulating_reservecoins(a: number, b: number): void;
export function bankbox_stablecoin_nominal_price(a: number, b: number, c: number): void;
export function bankbox_reservecoin_nominal_price(a: number, b: number, c: number): void;
export function bankbox_num_able_to_mint_stablecoin(a: number, b: number, c: number): void;
export function bankbox_num_able_to_mint_reservecoin(a: number, b: number, c: number, d: number, e: number): void;
export function bankbox_num_able_to_redeem_reservecoin(a: number, b: number, c: number): void;
export function bankbox_total_cost_to_mint_stablecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function bankbox_fees_from_minting_stablecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function bankbox_base_cost_to_mint_stablecoin(a: number, b: number, c: number, d: number, e: number): void;
export function bankbox_total_cost_to_mint_reservecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function bankbox_fees_from_minting_reservecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function bankbox_base_cost_to_mint_reservecoin(a: number, b: number, c: number, d: number, e: number): void;
export function bankbox_total_amount_from_redeeming_reservecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function bankbox_fees_from_redeeming_reservecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function bankbox_base_amount_from_redeeming_reservecoin(a: number, b: number, c: number, d: number, e: number): void;
export function bankbox_total_amount_from_redeeming_stablecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function bankbox_fees_from_redeeming_stablecoin(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function bankbox_base_amount_from_redeeming_stablecoin(a: number, b: number, c: number, d: number, e: number): void;
export function __wbg_reservecoinbox_free(a: number): void;
export function reservecoinbox_w_new(a: number): number;
export function reservecoinbox_w_box_spec(a: number): number;
export function reservecoinbox_w_process_explorer_response(a: number, b: number, c: number): void;
export function reservecoinbox_w_explorer_endpoint(a: number, b: number, c: number): void;
export function reservecoinbox_token_amount(a: number, b: number): void;
export function stablecoinbox_w_new(a: number): number;
export function stablecoinbox_w_box_spec(a: number): number;
export function stablecoinbox_w_process_explorer_response(a: number, b: number, c: number): void;
export function stablecoinbox_w_explorer_endpoint(a: number, b: number, c: number): void;
export function stablecoinbox_token_amount(a: number, b: number): void;
export function __wbg_stablecoinbox_free(a: number): void;
export function __wbg_ballotbox_free(a: number): void;
export function ballotbox_w_new(a: number): number;
export function ballotbox_w_box_spec(a: number): number;
export function ballotbox_w_process_explorer_response(a: number, b: number, c: number): void;
export function ballotbox_w_explorer_endpoint(a: number, b: number, c: number): void;
export function updatebox_w_new(a: number): number;
export function updatebox_w_box_spec(a: number): number;
export function updatebox_w_process_explorer_response(a: number, b: number, c: number): void;
export function updatebox_w_explorer_endpoint(a: number, b: number, c: number): void;
export function __wbg_updatebox_free(a: number): void;
export function __wbg_txassemblerspecbuilder_free(a: number): void;
export function txassemblerspecbuilder_w_new(a: number): number;
export function txassemblerspecbuilder_create_placeholder_ergs_box(a: number, b: number): number;
export function txassemblerspecbuilder_build_assembler_spec(a: number, b: number, c: number, d: number): void;
export function ergsbox_w_new(a: number): number;
export function ergsbox_w_box_spec(a: number): number;
export function ergsbox_w_process_explorer_response(a: number, b: number, c: number): void;
export function ergsbox_w_explorer_endpoint(a: number, b: number, c: number): void;
export function ergusdoraclepoolbox_w_new(a: number): number;
export function ergusdoraclepoolbox_w_box_spec(a: number): number;
export function ergusdoraclepoolbox_w_process_explorer_response(a: number, b: number, c: number): void;
export function ergusdoraclepoolbox_w_explorer_endpoint(a: number, b: number, c: number): void;
export function ergusdoraclepoolbox_datapoint(a: number, b: number): void;
export function ergusdoraclepoolbox_datapoint_in_cents(a: number, b: number): void;
export function __wbg_adausdoraclepoolbox_free(a: number): void;
export function adausdoraclepoolbox_w_new(a: number): number;
export function adausdoraclepoolbox_w_box_spec(a: number): number;
export function adausdoraclepoolbox_w_process_explorer_response(a: number, b: number, c: number): void;
export function adausdoraclepoolbox_w_explorer_endpoint(a: number, b: number, c: number): void;
export function adausdoraclepoolbox_datapoint(a: number, b: number): void;
export function adausdoraclepoolbox_datapoint_in_cents(a: number, b: number): void;
export function __wbg_ergusdoraclepoolbox_free(a: number): void;
export function __wbg_ergsbox_free(a: number): void;
export function __wbg_tokenspec_free(a: number): void;
export function __wbg_registerspec_free(a: number): void;
export function __wbg_boxspec_free(a: number): void;
export function boxspec_utxo_scan_json(a: number, b: number): void;
export function boxspec_modified_address(a: number, b: number, c: number): number;
export function boxspec_w_verify_box(a: number, b: number): number;
export function boxspec_w_explorer_endpoint(a: number, b: number, c: number, d: number): void;
export function boxspec_w_process_explorer_response(a: number, b: number, c: number): number;
export function __wbg_tokenid_free(a: number): void;
export function tokenid_from_box_id(a: number): number;
export function tokenid_from_str(a: number, b: number): number;
export function tokenid_to_str(a: number, b: number): void;
export function __wbg_tokenamount_free(a: number): void;
export function tokenamount_from_i64(a: number): number;
export function tokenamount_as_i64(a: number): number;
export function __wbg_token_free(a: number): void;
export function token_new(a: number, b: number): number;
export function token_id(a: number): number;
export function token_amount(a: number): number;
export function token_to_json(a: number): number;
export function __wbg_tokens_free(a: number): void;
export function tokens_new(): number;
export function tokens_len(a: number): number;
export function tokens_get(a: number, b: number): number;
export function tokens_add(a: number, b: number): void;
export function __wbg_secretkey_free(a: number): void;
export function secretkey_random_dlog(): number;
export function secretkey_dlog_from_bytes(a: number, b: number): number;
export function secretkey_get_address(a: number): number;
export function secretkey_to_bytes(a: number, b: number): void;
export function __wbg_secretkeys_free(a: number): void;
export function secretkeys_new(): number;
export function secretkeys_len(a: number): number;
export function secretkeys_get(a: number, b: number): number;
export function secretkeys_add(a: number, b: number): void;
export function __wbg_boxid_free(a: number): void;
export function boxid_to_str(a: number, b: number): void;
export function __wbg_ergoboxcandidate_free(a: number): void;
export function ergoboxcandidate_register_value(a: number, b: number): number;
export function ergoboxcandidate_creation_height(a: number): number;
export function ergoboxcandidate_tokens(a: number): number;
export function ergoboxcandidate_ergo_tree(a: number): number;
export function __wbg_ergobox_free(a: number): void;
export function ergobox_new(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function ergobox_box_id(a: number): number;
export function ergobox_creation_height(a: number): number;
export function ergobox_tokens(a: number): number;
export function ergobox_ergo_tree(a: number): number;
export function ergobox_value(a: number): number;
export function ergobox_register_value(a: number, b: number): number;
export function ergobox_to_json(a: number): number;
export function ergobox_from_json(a: number, b: number): number;
export function __wbg_boxvalue_free(a: number): void;
export function boxvalue_SAFE_USER_MIN(): number;
export function boxvalue_UNITS_PER_ERGO(): number;
export function boxvalue_from_i64(a: number): number;
export function boxvalue_as_i64(a: number): number;
export function __wbg_ergoboxassetsdata_free(a: number): void;
export function ergoboxassetsdata_new(a: number, b: number): number;
export function ergoboxassetsdata_tokens(a: number): number;
export function __wbg_ergoboxassetsdatalist_free(a: number): void;
export function ergoboxassetsdatalist_new(): number;
export function ergoboxassetsdatalist_len(a: number): number;
export function ergoboxassetsdatalist_get(a: number, b: number): number;
export function ergoboxassetsdatalist_add(a: number, b: number): void;
export function ergoboxcandidate_value(a: number): number;
export function ergoboxassetsdata_value(a: number): number;
export function __wbg_address_free(a: number): void;
export function address_recreate_from_ergo_tree(a: number): number;
export function address_p2pk_from_pk_bytes(a: number, b: number): number;
export function address_from_testnet_str(a: number, b: number): number;
export function address_from_mainnet_str(a: number, b: number): number;
export function address_from_base58(a: number, b: number): number;
export function address_to_base58(a: number, b: number, c: number): void;
export function address_from_bytes(a: number, b: number): number;
export function address_to_bytes(a: number, b: number, c: number): void;
export function address_address_type_prefix(a: number): number;
export function address_from_public_key(a: number, b: number): number;
export function address_to_ergo_tree(a: number): number;
export function __wbg_networkaddress_free(a: number): void;
export function networkaddress_new(a: number, b: number): number;
export function networkaddress_from_base58(a: number, b: number): number;
export function networkaddress_to_base58(a: number, b: number): void;
export function networkaddress_from_bytes(a: number, b: number): number;
export function networkaddress_to_bytes(a: number, b: number): void;
export function networkaddress_network(a: number): number;
export function networkaddress_address(a: number): number;
export function __wbg_contextextension_free(a: number): void;
export function contextextension_len(a: number): number;
export function contextextension_get(a: number, b: number): number;
export function contextextension_keys(a: number, b: number): void;
export function __wbg_boxselection_free(a: number): void;
export function boxselection_new(a: number, b: number): number;
export function boxselection_boxes(a: number): number;
export function boxselection_change(a: number): number;
export function simpleboxselector_new(): number;
export function simpleboxselector_select(a: number, b: number, c: number, d: number): number;
export function __wbg_ergotree_free(a: number): void;
export function ergotree_from_base16_bytes(a: number, b: number): number;
export function ergotree_from_bytes(a: number, b: number): number;
export function ergotree_to_bytes(a: number, b: number): void;
export function __wbg_simpleboxselector_free(a: number): void;
export function __wbg_proverresult_free(a: number): void;
export function proverresult_proof(a: number, b: number): void;
export function proverresult_extension(a: number): number;
export function proverresult_to_json(a: number): number;
export function mineraddress_mainnet_fee_address(a: number): void;
export function mineraddress_testnet_fee_address(a: number): void;
export function __wbg_i64_free(a: number): void;
export function i64_from_str(a: number, b: number): number;
export function i64_to_str(a: number, b: number): void;
export function i64_as_num(a: number): number;
export function i64_checked_add(a: number, b: number): number;
export function __wbg_mineraddress_free(a: number): void;
export function __wbg_constant_free(a: number): void;
export function constant_decode_from_base16(a: number, b: number): number;
export function constant_encode_to_base16(a: number, b: number): void;
export function constant_from_i32(a: number): number;
export function constant_to_i32(a: number): number;
export function constant_from_i64(a: number): number;
export function constant_to_i64(a: number): number;
export function constant_from_byte_array(a: number, b: number): number;
export function constant_to_byte_array(a: number): number;
export function __wbg_unsignedinput_free(a: number): void;
export function unsignedinput_box_id(a: number): number;
export function unsignedinput_extension(a: number): number;
export function __wbg_unsignedinputs_free(a: number): void;
export function unsignedinputs_get(a: number, b: number): number;
export function __wbg_input_free(a: number): void;
export function input_box_id(a: number): number;
export function input_spending_proof(a: number): number;
export function __wbg_inputs_free(a: number): void;
export function inputs_new(): number;
export function inputs_len(a: number): number;
export function inputs_get(a: number, b: number): number;
export function unsignedinputs_len(a: number): number;
export function unsignedinputs_new(): number;
export function __wbg_datainput_free(a: number): void;
export function datainput_box_id(a: number): number;
export function __wbg_datainputs_free(a: number): void;
export function datainputs_new(): number;
export function datainputs_len(a: number): number;
export function datainputs_get(a: number, b: number): number;
export function datainputs_add(a: number, b: number): void;
export function __wbg_ergoboxcandidatebuilder_free(a: number): void;
export function ergoboxcandidatebuilder_new(a: number, b: number, c: number): number;
export function ergoboxcandidatebuilder_set_min_box_value_per_byte(a: number, b: number): void;
export function ergoboxcandidatebuilder_min_box_value_per_byte(a: number): number;
export function ergoboxcandidatebuilder_set_value(a: number, b: number): void;
export function ergoboxcandidatebuilder_value(a: number): number;
export function ergoboxcandidatebuilder_calc_box_size_bytes(a: number): number;
export function ergoboxcandidatebuilder_calc_min_box_value(a: number): number;
export function ergoboxcandidatebuilder_set_register_value(a: number, b: number, c: number): void;
export function ergoboxcandidatebuilder_register_value(a: number, b: number): number;
export function ergoboxcandidatebuilder_delete_register_value(a: number, b: number): void;
export function ergoboxcandidatebuilder_mint_token(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function ergoboxcandidatebuilder_add_token(a: number, b: number, c: number): void;
export function ergoboxcandidatebuilder_build(a: number): number;
export function txid_zero(): number;
export function txid_to_str(a: number, b: number): void;
export function txid_from_str(a: number, b: number): number;
export function __wbg_transaction_free(a: number): void;
export function transaction_id(a: number): number;
export function transaction_to_json(a: number): number;
export function transaction_inputs(a: number): number;
export function transaction_data_inputs(a: number): number;
export function transaction_outputs(a: number): number;
export function __wbg_unsignedtransaction_free(a: number): void;
export function unsignedtransaction_id(a: number): number;
export function unsignedtransaction_inputs(a: number): number;
export function unsignedtransaction_to_json(a: number): number;
export function unsignedtransaction_from_json(a: number, b: number): number;
export function unsignedtransaction_outputs(a: number): number;
export function unsignedtransaction_data_inputs(a: number): number;
export function __wbg_txid_free(a: number): void;
export function __wbg_ergoboxes_free(a: number): void;
export function ergoboxes_from_boxes_json(a: number, b: number): number;
export function ergoboxes_new(a: number): number;
export function ergoboxes_add(a: number, b: number): void;
export function ergoboxes_get(a: number, b: number): number;
export function __wbg_ergoboxcandidates_free(a: number): void;
export function ergoboxcandidates_new(a: number): number;
export function ergoboxcandidates_empty(): number;
export function ergoboxcandidates_len(a: number): number;
export function ergoboxcandidates_get(a: number, b: number): number;
export function ergoboxcandidates_add(a: number, b: number): void;
export function __wbg_contract_free(a: number): void;
export function contract_pay_to_address(a: number): number;
export function ergoboxes_len(a: number): number;
export function __wbg_ergostatecontext_free(a: number): void;
export function ergostatecontext_dummy(): number;
export function __wbg_txbuilder_free(a: number): void;
export function txbuilder_SUGGESTED_TX_FEE(): number;
export function txbuilder_new(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function txbuilder_set_data_inputs(a: number, b: number): void;
export function txbuilder_build(a: number): number;
export function txbuilder_box_selection(a: number): number;
export function txbuilder_data_inputs(a: number): number;
export function txbuilder_output_candidates(a: number): number;
export function txbuilder_current_height(a: number): number;
export function txbuilder_fee_amount(a: number): number;
export function txbuilder_change_address(a: number): number;
export function txbuilder_min_change_value(a: number): number;
export function __wbg_wallet_free(a: number): void;
export function wallet_from_mnemonic(a: number, b: number, c: number, d: number): number;
export function wallet_from_secrets(a: number): number;
export function wallet_sign_transaction(a: number, b: number, c: number, d: number, e: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
