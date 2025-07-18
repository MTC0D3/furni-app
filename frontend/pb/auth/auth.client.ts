// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "auth/auth.proto" (package "auth", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { AuthService } from "./auth";
import type { GetProfileResponse } from "./auth";
import type { GetProfileRequest } from "./auth";
import type { ChangePasswordResponse } from "./auth";
import type { ChangePasswordRequest } from "./auth";
import type { LogoutResponse } from "./auth";
import type { LogoutRequest } from "./auth";
import type { LoginResponse } from "./auth";
import type { LoginRequest } from "./auth";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { RegisterResponse } from "./auth";
import type { RegisterRequest } from "./auth";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service auth.AuthService
 */
export interface IAuthServiceClient {
    /**
     * @generated from protobuf rpc: Register(auth.RegisterRequest) returns (auth.RegisterResponse);
     */
    register(input: RegisterRequest, options?: RpcOptions): UnaryCall<RegisterRequest, RegisterResponse>;
    /**
     * @generated from protobuf rpc: Login(auth.LoginRequest) returns (auth.LoginResponse);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse>;
    /**
     * @generated from protobuf rpc: Logout(auth.LogoutRequest) returns (auth.LogoutResponse);
     */
    logout(input: LogoutRequest, options?: RpcOptions): UnaryCall<LogoutRequest, LogoutResponse>;
    /**
     * @generated from protobuf rpc: ChangePassword(auth.ChangePasswordRequest) returns (auth.ChangePasswordResponse);
     */
    changePassword(input: ChangePasswordRequest, options?: RpcOptions): UnaryCall<ChangePasswordRequest, ChangePasswordResponse>;
    /**
     * @generated from protobuf rpc: GetProfile(auth.GetProfileRequest) returns (auth.GetProfileResponse);
     */
    getProfile(input: GetProfileRequest, options?: RpcOptions): UnaryCall<GetProfileRequest, GetProfileResponse>;
}
/**
 * @generated from protobuf service auth.AuthService
 */
export class AuthServiceClient implements IAuthServiceClient, ServiceInfo {
    typeName = AuthService.typeName;
    methods = AuthService.methods;
    options = AuthService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Register(auth.RegisterRequest) returns (auth.RegisterResponse);
     */
    register(input: RegisterRequest, options?: RpcOptions): UnaryCall<RegisterRequest, RegisterResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<RegisterRequest, RegisterResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Login(auth.LoginRequest) returns (auth.LoginResponse);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<LoginRequest, LoginResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Logout(auth.LogoutRequest) returns (auth.LogoutResponse);
     */
    logout(input: LogoutRequest, options?: RpcOptions): UnaryCall<LogoutRequest, LogoutResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<LogoutRequest, LogoutResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ChangePassword(auth.ChangePasswordRequest) returns (auth.ChangePasswordResponse);
     */
    changePassword(input: ChangePasswordRequest, options?: RpcOptions): UnaryCall<ChangePasswordRequest, ChangePasswordResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<ChangePasswordRequest, ChangePasswordResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetProfile(auth.GetProfileRequest) returns (auth.GetProfileResponse);
     */
    getProfile(input: GetProfileRequest, options?: RpcOptions): UnaryCall<GetProfileRequest, GetProfileResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetProfileRequest, GetProfileResponse>("unary", this._transport, method, opt, input);
    }
}
